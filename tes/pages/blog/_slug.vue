<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.text }}</p>
    </div>
</template>


<script>
export default {
    apollo:{
        post: {
            query: gql `query Post($slug: String!){
                post(filer: {slug:{
                    eq: $slug
                    } }) {
                        title
                        text
                        }
                    }`,
                    prefetch({route}) {
                        return {
                            slug: route.params.slug
                        }
                    },
                    variables(){
                        return {
                            slug: this.$route.params.slug,
                        }
            },
        }
    }
}
</script>