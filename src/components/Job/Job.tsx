import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { OcupationList } from '../../types/OcupationList';
import {
	ContainerJobStyled,
	JobStyled,
	JobTitleStyled,
	JobCompanyStyled,
	JobFromToStyled,
	DetailsButtonStyled,
	DetailsStyled,
	DescriptionStyled,
} from './styled';

/**
 * @export
 * @component
 * @name Ocupation
 *
 * @description
 * Responsável um Item da lista de Occupation
 */
export const Job = ({ title, company, fromTo, description }: OcupationList) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);

	/**
	 * @function
	 * @name onToggleDetails
	 *
	 * @description
	 * Responsável por abrir e fechar o detalhe do item
	 */
	const onToggleDetails = () => {
		setOpen(!open);
	};

	return (
		<ContainerJobStyled>
			<JobStyled>
				<JobTitleStyled>{title}</JobTitleStyled>

				<JobCompanyStyled>{company}</JobCompanyStyled>

				<JobFromToStyled>{fromTo}</JobFromToStyled>

				<DetailsButtonStyled type="button" onClick={onToggleDetails}>
					{open
						? t('home.ocupation.hiddenDetailButton')
						: t('home.ocupation.showDetailButton')}
				</DetailsButtonStyled>

				<DetailsStyled open={open}>
					{description.map((item) => (
						<DescriptionStyled key={item.id}>{item.text}</DescriptionStyled>
					))}
				</DetailsStyled>
			</JobStyled>
		</ContainerJobStyled>
	);
};
