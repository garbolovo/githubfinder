// Github class
const github = new Github();
const ui = new UI();


const searchUser = document.querySelector('#searchUser')
searchUser.addEventListener('keyup', function (event) {

    // console.log('something has been type')
    // console.dir(searchUser.value)
    // profile.textContent = searchUser.value
    if (searchUser.value.trim() !== '') {



        const userName = searchUser.value;
        // github.getUser(userName).then(res => console.log(res));
        github.getUser(userName).then(userData => {

            //check if profile exists in github - message: "Not Found"
            if(userData.profile.message !== 'Not Found') {

                // Show profile
                ui.showUserProfile(userData.profile)
                ui.showUserRepos(userData.repos)
            }
            else {
                // Show alert
                ui.showAlert()
            }
        });


    } else {
        //Clear profile
        ui.clearProfile()
    }


})


// github.getUser('brad').then(res => console.log(res));

// let p = github.getUser('b')

