import * as React from 'react';

import { AppBar, Toolbar, Typography, Grid, Button, Card , CardActions, CardContent, Box, CardHeader} from "@material-ui/core";
import { useHistory } from 'react-router-dom';



export default function PostCard(props) {
    const { post, isViewPage} = props;
    console.debug('props', post?.title);
    const history = useHistory()


    const handleViewPost = () => {
      history.push({
        pathname: '/viewPost',
        state: { post }
    });
    }

  return (
    <Card style={{marginRight: 8, marginBottom:12, height: '100%'}}>
        <CardHeader title= {post?.title} />
           
      <CardContent>
      <Typography variant="body2" 
      color="textSecondary" component="p"  
      dangerouslySetInnerHTML={{ __html: post?.content }}
      />
       
      </CardContent>
     {!isViewPage &&  <CardActions>
      <Button variant="outlined" onClick={handleViewPost}>
                View
              </Button> 
      </CardActions>}
    </Card>
  );
}
