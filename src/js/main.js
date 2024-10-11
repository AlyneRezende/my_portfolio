function updateProfile(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
}


(async () => {
    const profileData = await fetchProfileData()
    console.log(profileData)

})()