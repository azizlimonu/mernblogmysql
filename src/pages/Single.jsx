import React from 'react'
import postimg from '../img/404.jpg';
import userimg from '../img/1655342713379paul-walker-21044993-1-402.jpg';
import Delete from '../img/delete.png';
import Edit from '../img/edit.png';
import Menu from '../components/Menu';

const Single = () => {
  const handleDelete = () => {
    console.log("deleted");
  }

  return (
    <div className="single">
      <div className="content">
        <img src={postimg} alt="post" />

        <div className="user">
          <img src={userimg} alt="" />

          <div className="info">
            <span>John</span>
            <p>Posted 2 Hours Ago</p>
          </div>

          <div className="edit">
            <img className='edit-inner' src={Edit} alt="" />
            <img className='delete-inner' onClick={handleDelete} src={Delete} alt="" />
          </div>
        </div>

        <h1>Title Post</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aut eveniet iure fugit eum quaerat impedit, reiciendis ad. Ipsa, aperiam! Maxime rem, unde deserunt tempora, debitis amet aliquam repellendus consequuntur, hic voluptates delectus aliquid voluptate rerum ratione dolores asperiores placeat natus in. Sint blanditiis quasi et rem vel molestias minus, tempora, perferendis rerum nam obcaecati ipsa error. Delectus accusantium dolor numquam fugiat fuga vero? Repellendus quod repudiandae quis culpa odio sed, molestias reprehenderit amet similique, voluptatum inventore porro consequuntur! Dolorem animi ducimus non adipisci architecto qui ad accusantium aspernatur quas, delectus placeat doloremque est recusandae illo blanditiis earum laborum exercitationem. Quibusdam repellendus consequuntur, temporibus quaerat necessitatibus deleniti libero assumenda natus debitis ipsa dolores iste porro minima ut molestias maiores provident voluptatibus laudantium consequatur nesciunt. Recusandae repellendus et quaerat, nihil assumenda nesciunt quod vel dolore itaque maxime ea esse debitis, fugit nulla ducimus voluptates illo sit asperiores temporibus quis, provident a. Ea consectetur autem cum perferendis dolorum repudiandae commodi odio quasi aperiam nisi vitae harum est molestias in deleniti, consequuntur a voluptatibus exercitationem ipsam nesciunt ad provident fuga illo voluptates! Eum totam nostrum expedita similique qui ab, libero eaque ipsum dolorum voluptate cum vero, vitae dignissimos alias dolorem sed molestias tempore exercitationem nisi, error cumque odit.

          Provident sequi facilis dolorem, modi maiores libero magnam porro maxime quae mollitia? Ab maiores autem, et magnam, nostrum laboriosam in enim, saepe commodi adipisci fuga aspernatur cum officiis nobis. Unde architecto ut consectetur dignissimos pariatur quam sint, labore et suscipit eius nobis earum, placeat fugit quo exercitationem quasi hic? Nemo dolore ex, quas, aut quisquam placeat autem modi vel porro maiores nulla consequuntur sint hic culpa commodi architecto aspernatur, laudantium eum minus laborum neque facilis quis? At unde minima consequatur temporibus impedit quod rem laboriosam nostrum praesentium eligendi quam voluptatem, deserunt eos illo ex expedita.
        </p>
      </div>
      
      <Menu />
    </div>
  )
}

export default Single