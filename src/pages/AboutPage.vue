<template>
<section id="contents-wrap">
    <h3 id="page-title" class="text-normal">About</h3>
    <article class="contents">
        <p class="text-box font-bold">
            The best ideas come as jokes. Make your thinking as funny as possible <small class="text-large font-regular">~ David Mackenzie Ogilvy</small>
        </p>
        <img src="../assets/images/picture.png" alt="picture" class="picture">
        <h4 class="name text-center display-1 font-black">SEUNG JU</h4>
        <ul class="naming display-1 font-bold">
            <li>Special Design</li>
            <li>Excellent Ability</li>
            <li>Ultimate Skills</li>
            <li>No Problem</li>
            <li>Great Progress</li>
            <li>Join to make a difference</li>
            <li>Unlimited Development</li>
        </ul>
        <div class="profile-wrap">
            <h5 class="title text-center display-2 font-bold">PROFILE</h5>
            <table class="text-large font-light">
                <tr><td>Name</td><td>Oh Seung Ju</td></tr>
                <tr><td>Birth</td><td>2000. 09. 27</td></tr>
                <tr><td>Phone</td><td>010. 8327. 3235</td></tr>
                <tr><td>E-mail</td><td>kingsky32@gmail.com</td></tr>
            </table>
        </div>
    </article>
</section>
</template>

<style scoped lang="scss">
@import '../assets/scss/app';
#app {
    #contents-wrap {position: relative;
        .contents {
            .text-box {font-size: 90px; line-height: 96px; margin-bottom: 100px;}
            .picture {width: 343px; margin: 0 auto; display: block; margin-bottom: 75px;}
            .name {margin-bottom: 75px;}
            .naming {
                margin-bottom: 150px;
                li  {margin-bottom: 25px;
                    &:last-child {margin-bottom: 0;}
                }
            }
            .profile-wrap {
                .title {margin-bottom: 50px;}
                table {
                    tr {
                        td {padding-bottom: 15px; width: 100px;
                            &:last-child {padding-bottom: 0;}
                        }
                    }
                }
            }
        }
    }
}
</style>
