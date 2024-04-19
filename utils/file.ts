import fs from "fs"
import path from "path" // Import the 'path' module

export type Addresses = {
	proxy?: string
	latestVersion?: string
	admin?: string
}
const filePath = path.join(__dirname, "..", "output", "addresses.json")

export function loadAddresses(): Addresses {
	let output: Addresses = {}
	if (fs.existsSync(filePath)) {
		output = JSON.parse(fs.readFileSync(filePath, "utf8"))
	} else {
		const outputDir = path.join(__dirname, "output")
		if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)
		fs.writeFileSync(filePath, JSON.stringify(output))
	}
	return output
}

export function saveAddresses(content: Addresses): void {
	if (!fs.existsSync(filePath)) {
		const outputDir = path.join(__dirname, "output")
		if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)
	}
	fs.writeFileSync(filePath, JSON.stringify(content))
}
