export const localStorageService = {
    get: (key: string) => JSON.parse(localStorage.getItem(key) || '{}'),

    set: (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value)),

    remove: (key: string) => localStorage.removeItem(key)
}