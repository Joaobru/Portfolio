import { useTranslation } from 'react-i18next';

import {
	IconStyled,
	ItemStyled,
	ListStyled,
	LegendIconStyled,
	ContainerIconStyled,
} from './styled';

import gitHubIcon from '../../assets/images/github-icon.svg';
import linkedinIcon from '../../assets/images/linkedin-icon.svg';
import whatsappIcon from '../../assets/images/whatsapp-icon.svg';
import curriculumIcon from '../../assets/images/curriculum-icon.svg';

/**
 * @export
 * @component
 * @name ContactList
 *
 * @description
 * Responsável por montar a lista de contatos.
 */
export const ContactList = () => {
	const { t } = useTranslation();

	return (
		<ListStyled>
			<ItemStyled>
				<ContainerIconStyled
					href="https://github.com/Joaobru"
					target="_blank"
					rel="noreferrer"
				>
					<IconStyled src={gitHubIcon} alt="GitHub" />
					<LegendIconStyled>GitHub</LegendIconStyled>
				</ContainerIconStyled>
			</ItemStyled>

			<ItemStyled>
				<ContainerIconStyled
					href="https://www.linkedin.com/in/joao-paulo-brune"
					target="_blank"
					rel="noreferrer"
				>
					<IconStyled src={linkedinIcon} alt="Linkedin" />
					<LegendIconStyled>LinkedIn</LegendIconStyled>
				</ContainerIconStyled>
			</ItemStyled>

			<ItemStyled>
				<ContainerIconStyled
					href={`https://api.whatsapp.com/send?phone=5511965691973&text=${t(
						'home.contactList.messageSend'
					)}`}
					target="_blank"
					rel="noreferrer"
				>
					<IconStyled src={whatsappIcon} alt="WhatsApp" />
					<LegendIconStyled left="-0.6rem">WhatsApp</LegendIconStyled>
				</ContainerIconStyled>
			</ItemStyled>

			<ItemStyled>
				<ContainerIconStyled
					href={`/${t('home.contactList.cv')}`}
					download="Joao-Paulo-Brune-CV.pdf"
				>
					<IconStyled src={curriculumIcon} alt="Currículo" />
					<LegendIconStyled>
						{t('home.contactList.resumeTitle')}
					</LegendIconStyled>
				</ContainerIconStyled>
			</ItemStyled>
		</ListStyled>
	);
};
