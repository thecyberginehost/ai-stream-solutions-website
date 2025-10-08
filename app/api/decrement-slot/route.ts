import { NextResponse } from 'next/server'

// Import the same counter (in real production, use a database)
// For now, we'll use a simple file-based counter
import fs from 'fs'
import path from 'path'

const COUNTER_FILE = path.join(process.cwd(), 'slots-counter.json')

function getSlots() {
  try {
    if (fs.existsSync(COUNTER_FILE)) {
      const data = fs.readFileSync(COUNTER_FILE, 'utf-8')
      return JSON.parse(data).remaining
    }
  } catch (error) {
    console.error('Error reading slots:', error)
  }
  return 30
}

function setSlots(count: number) {
  try {
    fs.writeFileSync(COUNTER_FILE, JSON.stringify({ remaining: Math.max(0, count) }))
  } catch (error) {
    console.error('Error writing slots:', error)
  }
}

export async function POST() {
  const current = getSlots()
  const newCount = Math.max(0, current - 1)
  setSlots(newCount)

  return NextResponse.json({ remaining: newCount })
}
