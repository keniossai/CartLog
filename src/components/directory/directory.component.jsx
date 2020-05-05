import React from 'react'

import MenuItem from '../menu-item/menu-item.component'

import './directory-styles.scss'

class Directory extends React.Component{
    constructor() {
        super()
        
        this.state = {
            sections: [
                {
                    title: 'Collections',
                    imageUrl: 'https://thumbs.dreamstime.com/b/people-shopping-concept-happy-dark-haired-woman-shopaholic-dressed-polka-dot-dress-carries-shopping-bags-isolated-over-138392676.jpg',
                    id: 1,
                    linkUrl: 'collection'
                    
                },
                {
                    title: 'kids',
                    imageUrl: 'https://hutchinsonbear.com/wp-content/uploads/2014/10/kids-fashion-accessories-2013.jpg',
                    id: 2,
                    linkUrl: 'collection/kids'
                    
                },
                {
                    title: 'accessories',
                    imageUrl: 'https://www.letuspublish.com/wp-content/uploads/2017/10/luxe-accessories-for-gifts.jpg',
                    id: 3,
                    linkUrl: 'collection/accessories'
                    
                },
                {
                    title: 'womens',
                    imageUrl: 'https://media.istockphoto.com/photos/fashion-model-red-dress-elegant-woman-in-sexy-evening-gown-beautiful-picture-id911788280?k=6&m=911788280&s=612x612&w=0&h=wxMhU3gx58fCGNE_k2Q9nv68nu7V9-ceu9v2ffCQ8h8=',
                    size: 'large',
                    id: 4,
                    linkUrl: 'collection/womens'
                    
                },
                {
                    title: 'mens',
                    imageUrl: 'https://us.123rf.com/450wm/opolja/opolja1512/opolja151200044/50162916-man-in-suit-on-a-black-background.jpg?ver=6',
                    size: 'large',
                    id: 5,
                    linkUrl: 'collection/mens'
                    
                }
            ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        )
    }
}

export default Directory