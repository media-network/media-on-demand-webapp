import * as types from './types'

export const listInvalidateCache = (projectIdentifier) => ({
  type: types.LIST_INVALIDATE_CACHE,
  payload: { projectIdentifier }
})

export const listInvalidateCacheCompleted = (listInvalidateCaches) => ({
  type: types.LIST_INVALIDATE_CACHE_COMPLETED,
  payload: { listInvalidateCaches }
})

export const listInvalidateCacheFailed = reason => ({
  type: types.LIST_INVALIDATE_CACHE_FAILED,
  payload: { reason }
})

export const invalidateCache = (projectIdentifier, patterns) => ({
  type: types.INVALIDATE_CACHE,
  payload: { projectIdentifier, patterns }
})

export const invalidateCacheCompleted = (invalidateCache) => ({
  type: types.INVALIDATE_CACHE_COMPLETED,
  payload: { invalidateCache }
})

export const invalidateCacheFailed = reason => ({
  type: types.INVALIDATE_CACHE_FAILED,
  payload: { reason }
})

export const copyPatternsInvalidateCache = patterns => ({
  type: types.COPY_PATTERN_INVALIDATE_CACHE,
  payload: { patterns }
})
