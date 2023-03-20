import React from 'react'
import Post from './posts/Post'
import Post_add from './post_add/Post_add'
import Post_coment from './post_coments/Post_coment'
import Stories from './stories/Stories'
import './stories/stories_css/stories.css'
function Col_centro() {
    return (
        <>
            <div class="col-md-6 col-lg-7 col-xl-6">
                <Stories />
                <Post_add />
                <Post>
                    <Post_coment />
                </Post>
            </div>



        </>
    )
}

export default Col_centro