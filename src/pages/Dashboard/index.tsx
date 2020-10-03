import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/3258939?s=60&v=4"
            alt="Denis Toledo"
          />
          <div>
            <strong>dnstld/dnstld</strong>
            <p>Front-end developer with a taste for design</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/3258939?s=60&v=4"
            alt="Denis Toledo"
          />
          <div>
            <strong>dnstld/dnstld</strong>
            <p>Front-end developer with a taste for design</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/3258939?s=60&v=4"
            alt="Denis Toledo"
          />
          <div>
            <strong>dnstld/dnstld</strong>
            <p>Front-end developer with a taste for design</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
