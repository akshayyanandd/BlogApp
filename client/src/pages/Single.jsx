import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/27573929/pexels-photo-27573929/free-photo-of-a-van-parked-on-the-street-next-to-palm-trees.jpeg"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/26690662/pexels-photo-26690662/free-photo-of-interior-of-an-ice-cave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <div className="info">
            <span>John</span>
            <p>Posted 2days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, vitae!
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          deserunt, nulla fugit nostrum perspiciatis harum! Suscipit esse
          voluptatum molestias ut enim, perferendis natus expedita, repellat
          quas in consequuntur ab sint placeat alias. Voluptatibus corrupti nisi
          quibusdam doloribus, magni quaerat illum? Rem id voluptatum sequi cum
          placeat, inventore praesentium harum esse, ut eius quia libero quae
          delectus maxime sapiente tenetur accusamus! Vitae atque maiores
          consequuntur consectetur hic, nam, velit molestiae vel molestias
          aperiam incidunt. Dolorem a commodi facere nulla. Quidem, voluptate
          vitae quos nostrum numquam consequatur quia, dolore temporibus, cum
          vero assumenda fuga obcaecati. Ipsa in facilis provident reiciendis
          maxime asperiores harum modi? Inventore a molestias voluptatibus
          debitis, eius magni autem blanditiis fugiat, esse consequuntur
          facilis, dicta assumenda ad hic maiores voluptates voluptate
          laboriosam! Atque voluptatibus, veniam sapiente exercitationem natus
          quae unde, pariatur ut non culpa consectetur sunt quam illum
          voluptates error distinctio molestias et dolorem at suscipit eveniet.
          Odit veritatis sequi at qui. Non, qui! Non impedit et nostrum natus
          quasi dolores vitae porro, perspiciatis ratione quis. Minima quas
          laborum sit laudantium obcaecati provident quasi quae alias numquam
          cumque, reiciendis autem aut hic laboriosam consectetur doloribus
          aliquid atque recusandae, facilis placeat impedit ratione deleniti
          consequuntur. Tempora, porro? Iure neque excepturi dolor iste non,
          quasi nostrum error est praesentium, veritatis ut laudantium
          perferendis voluptas placeat asperiores omnis in deserunt ea maiores
          culpa, distinctio quis? Officiis eaque, et doloribus autem quam enim
          placeat asperiores explicabo odit, atque, maxime nulla nobis. Cumque
          quia atque eum quo rem eius eos excepturi ut temporibus neque sit
          harum iusto laboriosam repellat perspiciatis omnis voluptatibus
          incidunt cupiditate pariatur, nisi labore! Mollitia consequatur quae
          velit recusandae quas ab cum fugiat! Modi reiciendis illum sint odit
          quas doloremque dolores voluptatum placeat praesentium! Minus
          corporis, magnam excepturi illo dolorum porro, nisi voluptate sint
          incidunt doloribus aspernatur voluptas necessitatibus in quibusdam
          odit. Libero, dicta repellat! Rerum natus perspiciatis ad veritatis
          corporis tempore dolores accusantium cumque qui, possimus dicta atque
          iste nulla similique optio ullam quidem laudantium! Iure velit unde ea
          aliquam reiciendis enim in a expedita, debitis sed cupiditate tenetur
          earum quasi animi obcaecati culpa autem assumenda eum perferendis
          consectetur! Labore?
        </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
