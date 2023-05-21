import data from '../etsy.json';
import { IItem } from '../interface/IItem';
import Item from './Item';

const Listing = () => {
  

  return (
    <div className="item-list">
      {
        data.map(item => <Item item={item} key={item.listing_id}/>)
      }
    </div>
  )
}

export default Listing