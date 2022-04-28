import leatmeAskImage from '../../../assets/images/projects/leatmeask.png';
import proffyImage from '../../../assets/images/projects/proffy.png';
import escalaImage from '../../../assets/images/projects/escala.png';
import dtMoneyImage from '../../../assets/images/projects/dtMoney.png';
import userManagementImage from '../../../assets/images/projects/userManagement.png';

export const projects = {
	title: 'Projetos',
	list: [
		{
			id: 1,
			title: 'LeatmeAsk',
			img: leatmeAskImage,
			description: `O LeatMeask serve para pessoas que produzem conteúdo, auxilia no
		controle das perguntas durante lives... Tornando muito mais fácil
		interagir com o seu público.`,
			listLink: [
				{
					id: 1,
					name: 'GitHub',
					link: 'https://github.com/Joaobru/Leatmeask',
				},
				{
					id: 2,
					name: 'Projeto',
					link: 'https://leatmeask-4458b.firebaseapp.com/',
				},
			],
		},
		{
			id: 2,
			title: 'Proffy',
			img: proffyImage,
			description: `O Proffy é uma plataforma que visa facilitar a conexão entre alunos e
			professores, dando a possibilidade dos professores cadastrarem suas
			aulas especificando a matéria, horários, dias...`,
			listLink: [
				{
					id: 1,
					name: 'GitHub',
					link: 'https://github.com/Joaobru/Proffy',
				},
				{
					id: 2,
					name: 'Projeto',
					link: 'https://stupefied-turing-6a35f2.netlify.app/',
				},
			],
		},
		{
			id: 3,
			title: 'Escala',
			img: escalaImage,
			description: `O projeto foi desenvolvido para o Hackaton da CCR 2.0 pelo grupo 25,
			nós desenvolvemos um aplicativo com sistema de Gameficação para
			diminuir o índice de evasão escolar.`,
			listLink: [
				{
					id: 1,
					name: 'GitHub',
					link: 'https://github.com/Joaobru/Escala',
				},
			],
		},
		{
			id: 4,
			title: 'DtMoney',
			img: dtMoneyImage,
			description: `Esse projeto foi desenvolvido com fins educativos, com ele eu conheci
			a ferramenta MirageJS, e aperfeiçoei minhas habilidades em Context API
			e Styled Components.`,
			listLink: [
				{
					id: 1,
					name: 'GitHub',
					link: 'https://github.com/Joaobru/DtMoney',
				},
			],
		},
		{
			id: 5,
			title: 'Gerenciamento de Usuários',
			img: userManagementImage,
			description: `Este projeto foi desenvolvido com a finalidade de melhorar minhas
			habilidades no Front End/Back End, para manipulação de um usuário,
			sendo possível criar, listar, editar e excluir.`,
			listLink: [
				{
					id: 1,
					name: 'GitHub',
					link: 'https://github.com/Joaobru/Gerenciamento-de-usuarios',
				},
			],
		},
	],
};
