export const fetchIdeas = () => {
    return new Promise((resolve, reject) => {
        resolve(localStorage.getItem('ideas'))
    })
}

export const deleteIdea = (ideas, id) => {
    return new Promise((resolve, reject) => {
        let response = ideas.filter(x => x.id !== id);
        resolve(response)
    })
}

export const updateIdea = (ideas, idea) => {
    return new Promise((resolve, reject) => {
        let response = [...ideas.map(x => x.id === idea.id ? { ...idea } : x)];
        resolve(response)
    })
}