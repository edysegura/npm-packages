import assert from 'assert'
import { describe, it } from 'node:test'
import eyeLogger from './index.mjs'

describe('eyeLogger', () => {
  it('should log with the correct file name', () => {
    // Capture console.log output
    const originalLog = console.log
    let loggedOutput = ''
    console.log = (...args) => {
      loggedOutput = args.join(' ')
      originalLog(loggedOutput)
    }

    try {
      // Test the logger
      eyeLogger('test message')
      // Assert that the output contains the file name and message
      assert.ok(loggedOutput.includes('[index.test.mjs]'))
    } finally {
      // Restore the original console.log
      console.log = originalLog
    }
  })
})
