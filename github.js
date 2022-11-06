class Github {
    constructor() {
        // this.client_id = '95ee1928a25802da64e2';
        // this.client_secret = '5e1941228d8fe7b267d897511ce95adef9245df7'



        //seems that this Authorization had broken
        this.config = {
            headers: {
                Authorization: 'token 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'
            }
        }


    }


    async getUser(user) {
        const responseProfile = await fetch(`https://api.github.com/users/${user}`, this.config);
        const responseRepos = await fetch(`https://api.github.com/users/${user}/repos`, this.config);
        const profile = await responseProfile.json();
        const repos = await responseRepos.json();
        console.log(repos)
        return {
            profile,
            repos
        }



    }
}





