import { NextResponse } from 'next/server'
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
  // Initialize with 30 slots if file doesn't exist
  const initialCount = 30
  try {
    fs.writeFileSync(COUNTER_FILE, JSON.stringify({ remaining: initialCount }))
  } catch (error) {
    console.error('Error initializing slots:', error)
  }
  return initialCount
}

export async function GET() {
  const remaining = getSlots()
  return NextResponse.json({ remaining })
}
