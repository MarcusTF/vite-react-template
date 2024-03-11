import { describe, expect, it, vitest } from "vitest"

import { bemElements, bemModifiers, currentTime, debugLog, getPages, required } from "./utilities"

describe("utilities", () => {
  describe("bemModifiers", () => {
    it("should generate BEM class names with modifiers", () => {
      const result = bemModifiers("button", "primary")
      expect(result).toBe("button button--primary")
    })
    it("should return only the className when no modifier is provided", () => {
      const result = bemModifiers("button")
      expect(result).toBe("button")
    })
    it("should return an empty string when className is not provided", () => {
      const result = bemModifiers()
      expect(result).toBe("")
    })
    it("should return an empty string when className is an empty array", () => {
      const result = bemModifiers([])
      expect(result).toBe("")
    })
    it("should return the className with BEM modifiers", () => {
      const result = bemModifiers("button", "primary")
      expect(result).toBe("button button--primary")
    })
    it("should handle multiple classNames and modifiers", () => {
      const result = bemModifiers(["button", "icon"], ["primary", "large"])
      expect(result).toBe("button button--primary button--large icon icon--primary icon--large")
    })
    it("should return only the classNames when an empty modifier is provided", () => {
      const result = bemModifiers("button", "")
      expect(result).toBe("button")
    })
    it("should handle className and modifier as arrays", () => {
      const result = bemModifiers(["button", "icon"], ["primary", "large"])
      expect(result).toBe("button button--primary button--large icon icon--primary icon--large")
    })
    it("should handle className as a string and modifier as an array", () => {
      const result = bemModifiers("button", ["primary", "large"])
      expect(result).toBe("button button--primary button--large")
    })
    it("should handle className as an array and modifier as a string", () => {
      const result = bemModifiers(["button", "icon"], "primary")
      expect(result).toBe("button button--primary icon icon--primary")
    })
    it("should return an empty string when className is an empty string", () => {
      const result = bemModifiers("")
      expect(result).toBe("")
    })
    it("should return an empty string when className is an array with an empty string", () => {
      const result = bemModifiers([""])
      expect(result).toBe("")
    })
    it("should return the className when modifier is an empty string", () => {
      const result = bemModifiers("button", "")
      expect(result).toBe("button")
    })
    it("should return the className when modifier is an array with an empty string", () => {
      const result = bemModifiers("button", [""])
      expect(result).toBe("button")
    })
    it("should return the className when modifier is an array with only empty strings", () => {
      const result = bemModifiers("button", ["", ""])
      expect(result).toBe("button")
    })
    it("should return an empty string when both className and modifier are empty strings", () => {
      const result = bemModifiers("", "")
      expect(result).toBe("")
    })
    it("should return an empty string when className is an empty string and modifier is an array with an empty string", () => {
      const result = bemModifiers("", [""])
      expect(result).toBe("")
    })
  })

  describe("bemElements", () => {
    it("should generate BEM class names with elements", () => {
      const result = bemElements("button", "icon")
      expect(result).toBe("button__icon")
    })
  })

  describe("currentTime", () => {
    it("should generate the current time in AM/PM format", () => {
      const result = currentTime()
      expect(result).toMatch(/\d{1,2}:\d{2} (AM|PM)/)
    })
  })

  describe("required", () => {
    it('should return "Required" if value is falsy', () => {
      const result = required("")
      expect(result).toBe("Required")
    })

    it("should return undefined if value is truthy", () => {
      const result = required("value")
      expect(result).toBeUndefined()
    })
  })

  describe("getPages", () => {
    it("should return the page buttons and total number of pages", () => {
      const result = getPages(100, 10, 1)
      expect(result).toEqual({ pageButtons: [1, 2, 3, 4, 5, 6, 7], totalPages: 10 })
    })
    it("should return one page button and total number of pages if the total is 0", () => {
      const result = getPages(0, 10, 1)
      expect(result).toEqual({ pageButtons: [1], totalPages: 0 })
    })
    it("should return one page button and total number of pages if the total is less than the amount per page", () => {
      const result = getPages(5, 10, 1)
      expect(result).toEqual({ pageButtons: [1], totalPages: 1 })
    })
    it("should return one page button and total number of pages if the total is equal to the amount per page", () => {
      const result = getPages(10, 10, 1)
      expect(result).toEqual({ pageButtons: [1], totalPages: 1 })
    })
    it("should return the correct page buttons if the current page is among the first 3 pages", () => {
      const result1 = getPages(100, 10, 1)
      const result2 = getPages(100, 10, 1)
      const result3 = getPages(100, 10, 1)
      expect(result1).toEqual({ pageButtons: [1, 2, 3, 4, 5, 6, 7], totalPages: 10 })
      expect(result2).toEqual({ pageButtons: [1, 2, 3, 4, 5, 6, 7], totalPages: 10 })
      expect(result3).toEqual({ pageButtons: [1, 2, 3, 4, 5, 6, 7], totalPages: 10 })
    })
    it("should return the correct page buttons if the current page is among the last 3 pages", () => {
      const result1 = getPages(100, 10, 7)
      const result2 = getPages(100, 10, 8)
      const result3 = getPages(100, 10, 9)
      expect(result1).toEqual({ pageButtons: [4, 5, 6, 7, 8, 9, 10], totalPages: 10 })
      expect(result2).toEqual({ pageButtons: [4, 5, 6, 7, 8, 9, 10], totalPages: 10 })
      expect(result3).toEqual({ pageButtons: [4, 5, 6, 7, 8, 9, 10], totalPages: 10 })
    })
  })
  describe("debugLog", () => {
    it("should only run if the environment is development", () => {
      vitest.stubEnv("NODE_ENV", "development")
      vitest.spyOn(console, "log")
      vitest.spyOn(console, "error")
      vitest.spyOn(console, "warn")

      debugLog("test")
      expect(console.log).toHaveBeenCalledTimes(1)
      expect(console.log).toHaveBeenCalledWith("test")

      debugLog("test", "error")
      expect(console.error).toHaveBeenCalledTimes(1)
      expect(console.error).toHaveBeenCalledWith("test")

      debugLog("test", "warn")
      expect(console.warn).toHaveBeenCalledTimes(1)
      expect(console.warn).toHaveBeenCalledWith("test")
    })
    it("should not run if the environment is not development", () => {
      vitest.stubEnv("NODE_ENV", "production")
      vitest.spyOn(console, "log")
      vitest.spyOn(console, "error")
      vitest.spyOn(console, "warn")

      debugLog("test")
      expect(console.log).not.toHaveBeenCalled()

      debugLog("test", "error")
      expect(console.error).not.toHaveBeenCalled()

      debugLog("test", "warn")
      expect(console.warn).not.toHaveBeenCalled()
    })
  })
})
