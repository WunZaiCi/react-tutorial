export const LANGUAGES = [
    'JavaScript',
    'C++',
    'Ruby',
    'Java',
    'PHP',
    'G0'
];

export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(LANGUAGES);
            }, 1000
        )
    })
}