let data = '';
process.stdin.on('data', chunk => (data += chunk));
process.stdin.on('end', () => {
  let input;
  try {
    input = JSON.parse(data);
  } catch {
    return;
  }

  const command = (input.tool_input && input.tool_input.command) || '';
  const blocked =
    /(^|[;&|]\s*)git\s+push|(^|[;&|]\s*)git\s+commit|(^|[;&|]\s*)(npm|pnpm)\s+publish/i;

  if (blocked.test(command)) {
    console.log(
      JSON.stringify({
        hookSpecificOutput: {
          hookEventName: 'PreToolUse',
          permissionDecision: 'deny',
          permissionDecisionReason:
            'Blocked by project policy: git push, git commit, npm publish, and pnpm publish are disabled for this project.'
        }
      })
    );
  }
});
