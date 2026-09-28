const { PIPELINE_URL, TRIGGER_SECRET, BEFORE: before, AFTER: after } = process.env;
if (!PIPELINE_URL || !TRIGGER_SECRET || !/^[a-f0-9]{40}$/.test(before || "") || !/^[a-f0-9]{40}$/.test(after || "")) throw Error("Missing pipeline configuration or source revisions");
for (let attempt = 0; attempt < 4; attempt++) {
  try {
    const response = await fetch(`${PIPELINE_URL}/run`, {
      method: "POST", signal: AbortSignal.timeout(30000),
      headers: { authorization: `Bearer ${TRIGGER_SECRET}`, "content-type": "application/json" },
      body: JSON.stringify({ before, after }),
    });
    if (response.ok) { console.log(await response.text()); break; }
    const message = `Admission ${response.status}: ${await response.text()}`;
    if (response.status < 500) throw new TypeError(message);
    throw Error(message);
  } catch (error) {
    if (error instanceof TypeError || attempt === 3) throw error;
    await new Promise(resolve => setTimeout(resolve, 5000 * (attempt + 1)));
  }
}
