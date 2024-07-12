const cache = new Map()
 
class CacheHandler {
  constructor(options) {
    this.options = options
  }
 
  async get(key) {
    console.log('getting cache: ', key, cache.has(key));
    // This could be stored anywhere, like durable storage
    return cache.get(key)
  }
 
  async set(key, data, ctx) {
    // This could be stored anywhere, like durable storage
    console.log('setting cache: ', key);
    cache.set(key, {
      value: data,
      lastModified: Date.now(),
      tags: ctx.tags,
    })
  }

  async revalidateTag(tag, ctx) {
    console.log('revalidating: ', tag);
    // Iterate over all entries in the cache
    for (let [key, value] of cache) {
      // If the value's tags include the specified tag, delete this entry
      if (value?.tags?.includes(tag) || tag.includes(key)) {
        cache.delete(key)
      }
    }
  }
}

module.exports = CacheHandler