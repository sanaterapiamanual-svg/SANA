import { LoaderWidgetContainer, LogoImg } from './styles';
import Logo from '../../assets/images/dark-logo-2.png';

function LoaderWidget() {
	return (
		<LoaderWidgetContainer role="status" aria-label="Loading">
			<LogoImg src={Logo} alt="Sana Logo" />
		</LoaderWidgetContainer>
	);
}

export default LoaderWidget;
