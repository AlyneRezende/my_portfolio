
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/AlyneRezende/my_portfolio/refs/heads/main/src/data/profile.json?token=GHSAT0AAAAAACX4N6KWSFM5IN36JMLOWJA2ZYI7FTA'
    const fetching = await fetch(url)
    return await fetching.json()
}