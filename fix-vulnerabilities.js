// This is a script to help fix vulnerabilities
// Run with: node fix-vulnerabilities.js

const { execSync } = require("child_process")

console.log("Running npm audit to identify vulnerabilities...")
try {
  const auditOutput = execSync("npm audit --json").toString()
  console.log("Vulnerabilities identified. Attempting to fix...")

  try {
    execSync("npm audit fix", { stdio: "inherit" })
    console.log("Fixed vulnerabilities that could be addressed without breaking changes.")

    console.log("\nChecking if there are still vulnerabilities...")
    try {
      const remainingIssues = execSync("npm audit --json").toString()
      const issuesObj = JSON.parse(remainingIssues)

      if (issuesObj.vulnerabilities && Object.keys(issuesObj.vulnerabilities).length > 0) {
        console.log("\nThere are still some vulnerabilities that require manual intervention:")
        console.log("You can try running: npm audit fix --force")
        console.log("Note: This might update packages to versions that could break your application.")
        console.log("Alternatively, review the specific vulnerabilities and address them individually.")
      } else {
        console.log("\nAll vulnerabilities have been fixed!")
      }
    } catch (e) {
      console.log("Error checking remaining vulnerabilities:", e.message)
    }
  } catch (e) {
    console.log("Error fixing vulnerabilities:", e.message)
  }
} catch (e) {
  console.log("Error running npm audit:", e.message)
}
