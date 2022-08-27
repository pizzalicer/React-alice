import React from "react";
import * as S from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <S.Cabecalho>
            <picture>
                <Link to="/">
                    <AiOutlineHome />
                </Link>
            </picture>
            <nav>
                <ul>
                    <li>FOFOCAS</li>
                    <li>MODA</li>
                    <li>BELEZA</li>
                    <li>QUEST</li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/cadastrar">CADASTRE-SE</Link>
                    </li>
                </ul>
            </nav>
        </S.Cabecalho>
    );
};

export default Menu;