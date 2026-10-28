document.querySelector('#share').addEventListener('click', async () => {
  const text = "Handshake Lab \u2014 See how a clear agreement resolves competing connection requests and failed attempts. Try this free interactive RFC 2 lab: https://sreenivas-sadhu-prabhakara.github.io/rfc-0002-handshake-lab/";
  try { await navigator.clipboard.writeText(text); document.querySelector('#share-status').textContent='Copied. Ready to share wherever you choose.'; }
  catch { document.querySelector('#share-status').textContent=text; }
});
