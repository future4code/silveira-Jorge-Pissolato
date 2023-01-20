import React, { useContext } from 'react';
import { goBack, irParaEditarPerfil, useProtectPage } from '../../routes/coordinator';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { App, Hr, DivLogo, EditUser, DivUserStats, EditAddress, DivUserAddress, Hr2, DivFooter, CardHistory, ContainerCardHistory, StyledTextHistory } from './styled';
import EditIcon from '../../assets/edit.png';
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { Back, Logo } from '../EditarPerfil/styled';
import Backward from '../../assets/back.png';
import LogoVermelha from '../.././assets/logo-vermelha.png';

const PaginaPerfil = () => {
  useProtectPage();
  const { addressUser } = useContext(GlobalStateContext);
  const { userStats } = useContext(GlobalStateContext);
  const { orderHistory } = useContext(GlobalStateContext);
  const navigate = useNavigate()



  const cardHistory = orderHistory && orderHistory.map((item) => {
    return (
      <ContainerCardHistory
        key={item.data}
      >
        <StyledTextHistory>
          <p>Nome: {item.restaurantName}</p>
          <p>SubTotal: R$ {item.totalPrice}</p>
        </StyledTextHistory>
      </ContainerCardHistory>
    )
  })

  return (
    <App>
      <DivLogo>
        <Back onClick={() => goBack(navigate)} src={Backward} />
        <Logo src={LogoVermelha} />
        <h3><strong>Meu Perfil</strong></h3>
        <Hr></Hr>
      </DivLogo>
      <EditUser>
        <DivUserStats>
          <p><strong>{userStats.name}</strong></p>
          <p><strong>{userStats.email}</strong></p>
          <p><strong>{userStats.cpf}</strong></p>
        </DivUserStats>
        <img src={EditIcon} onClick={() => irParaEditarPerfil(navigate)} />
      </EditUser>
      <EditAddress>
        <DivUserAddress>
          <h4>Endereço Cadastrado</h4>
          <p>{`${addressUser.street}, ${addressUser.number} - ${addressUser.city}`}</p>
        </DivUserAddress>
        <img src={EditIcon} />
      </EditAddress>
      <h4>Histórico de pedidos</h4>
      <Hr2></Hr2>
      {cardHistory}
      <DivFooter>
        <Footer />
      </DivFooter>
    </App>
  )
}

export default PaginaPerfil;