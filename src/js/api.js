
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/AlyneRezende/my_portfolio/refs/heads/main/src/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}