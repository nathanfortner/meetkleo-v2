export const fetchMarkdownPosts = async () => {
    try {
      const allPostFiles = import.meta.glob('/src/routes/articles/posts/*.md');
  
      const iterablePostFiles = Object.entries(allPostFiles);
      // console.log(iterablePostFiles);
      
      const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
          const { metadata } = await resolver();
          const postPath = path.slice(29, -3);
          
          return {
            meta: metadata,
            path: postPath,
          }
        })
      );
      return allPosts
    }
    catch (e) {
      console.log('error loading all the markdown files ', e);
    }
  }