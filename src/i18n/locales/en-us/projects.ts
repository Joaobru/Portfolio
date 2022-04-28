import leatmeAskImage from '../../../assets/images/projects/leatmeask.png';
import proffyImage from '../../../assets/images/projects/proffy.png';
import escalaImage from '../../../assets/images/projects/escala.png';
import dtMoneyImage from '../../../assets/images/projects/dtMoney.png';
import userManagementImage from '../../../assets/images/projects/userManagement.png';

export const projects = {
	title: 'Projects',
	list: [
		{
			id: 1,
			title: 'LeatmeAsk',
			img: leatmeAskImage,
			description: `LeatMeask is for people who produce content, assists in
			control of questions during lives... Making it much easier
			interact with your audience.`,
			listLink: [
				{
					id: 1,
					name: 'GitHub',
					link: 'https://github.com/Joaobru/Leatmeask',
				},
				{
					id: 2,
					name: 'Project',
					link: 'https://leatmeask-4458b.firebaseapp.com/',
				},
			],
		},
		{
			id: 2,
			title: 'Proffy',
			img: proffyImage,
			description: `
			Proffy is a platform that aims to facilitate the connection between students and
			teachers, giving teachers the possibility to register their
			classes specifying the subject, times, days...`,
			listLink: [
				{
					id: 1,
					name: 'GitHub',
					link: 'https://github.com/Joaobru/Proffy',
				},
				{
					id: 2,
					name: 'Project',
					link: 'https://stupefied-turing-6a35f2.netlify.app/',
				},
			],
		},
		{
			id: 3,
			title: 'Escala',
			img: escalaImage,
			description: `The project was developed for the CCR 2.0 Hackaton by group 25,
			we developed an application with Gamefication system to
			decrease the school dropout rate.`,
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
			description: `This project was developed for educational purposes, with it I met
			the MirageJS tool, and honed my Context API skills
			and Styled Components.`,
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
			description: `This project was developed with the aim of improving my
			Front End/Back End skills, for manipulating a user,
			being possible to create, list, edit and delete.`,
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
