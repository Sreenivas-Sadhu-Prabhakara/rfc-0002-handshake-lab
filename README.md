# Handshake Lab

Step through success, simultaneous requests, timeout and unexpected-response scenarios.

**[Open the interactive utility](https://sreenivas-sadhu-prabhakara.github.io/rfc-0002-handshake-lab/)** · [RFC 2](https://www.rfc-editor.org/rfc/rfc2.txt) · [Official status and errata](https://www.rfc-editor.org/info/rfc2)

## Community benefit

See how a clear agreement resolves competing connection requests and failed attempts. Intended audience: Networking learners and distributed-system educators.

## Run locally

Serve this folder with `python3 -m http.server 8000`, then open http://localhost:8000.
The site has no build step or runtime dependencies. Inputs remain in the browser.
Run meaningful behavioral tests with `node --test` (Node 22 or later).

## Evidence and limitations

Basis: RFC 2, 2b1d: primary-link establishment, collision and timeout handling.

A bounded educational state trace, not a complete NCP implementation. Host IDs use a teaching range of 0–31. Timeout duration is chosen by the learner.

Legacy proposal, not a current Internet standard. The archived document reports its first page missing. This independent educational project is not affiliated with the IETF or RFC Editor.

## Publish

GitHub Pages serves `main` at `/`; assets use relative URLs. `.nojekyll` disables Jekyll processing.
See [PROMOTION.md](PROMOTION.md) for a classroom activity and sharing copy.
Original project code is MIT licensed; referenced RFCs retain their respective notices.

## Optional cloud CI

Tests run locally before publication. `ci/test.yml` is an inactive Actions template; activating it under `.github/workflows/` requires a GitHub credential with workflow permission.
