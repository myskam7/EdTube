import React, {Component} from 'react';

const ItemCard = ({  id,
                      channelTitle,
                      publishedAt,
                      title,
                      channelId,
                      description,
                      link,
                      thumbnails  }) => {

    // console.log("item", this.props);

        return (
            <>
                <ul key={this.props.item.id}>
                    <li >{this.props}</li>
                    <li >{title}</li>
                </ul>
            </>
        );
    }


export default ItemCard;






