export function handshake(a, b, scenario, timeout) {
  if (![a,b].every(n=>Number.isInteger(n)&&n>=0&&n<=31) || a===b) throw new RangeError('Choose two different whole host IDs between 0 and 31.');
  if (!Number.isInteger(timeout)||timeout<100||timeout>10000) throw new RangeError('Timeout must be a whole number between 100 and 10000 ms.');
  if (!['success','collision','timeout','unexpected'].includes(scenario)) throw new RangeError('Unknown scenario.');
  const trace=[{state:'REQUESTING',message:`Host ${a} selects free link 7 and sends a connection request to host ${b} over control link 0.`}];
  if (scenario==='success') trace.push({state:'ESTABLISHED',message:`Host ${b} verifies link 7. Host ${a} returns the link to its requesting program.`});
  if (scenario==='collision') {
    const winner=Math.max(a,b), yielding=Math.min(a,b);
    trace.push({state:'COLLISION',message:`Host ${b} independently requests the same link 7. Both requests cross.`});
    trace.push({state:'RESOLVING',message:`Higher ID ${winner} ignores the competing request and awaits verification. Lower ID ${yielding} accepts it and sends verification.`});
    trace.push({state:'REALLOCATING',message:`Host ${yielding} abandons its own allocation attempt and restarts on another free link. Host ${winner}'s link 7 is established.`});
  }
  if (scenario==='timeout') trace.push({state:'ERROR',message:`No reply arrives within the chosen ${timeout} ms. Host ${a} sends a disconnect and enters error handling.`});
  if (scenario==='unexpected') trace.push({state:'ERROR',message:`An unexpected communication concerns link 7. Host ${a} sends a disconnect and enters error handling.`});
  return trace;
}
