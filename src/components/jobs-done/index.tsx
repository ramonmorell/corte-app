import React, {useCallback, useMemo} from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';


export default function JobsDone () {
	const images = useMemo( () => [
		{
			url: './assets/images/servicio1.jpg',
			title: 'Letras y acabados',
			width: '24%'
		},
		{
			url: './assets/images/servicio1.jpg',
			title: 'Rotulación',
			width: '24%'
		},
		{
			url: './assets/images/servicio1.jpg',
			title: 'Decoración eventos',
			width: '24%'
		},
		{
			url: './assets/images/servicio1.jpg',
			title: 'Otros',
			width: '24%'
		}
	], []);

	const useStyles = makeStyles((theme: Theme) =>
		createStyles({
			root: {
				display: 'flex',
				flexWrap: 'wrap',
				minWidth: 300,
				width: '100%',
				justifyContent: 'space-around',

			},
			image: {
				position: 'relative',
				height: 100,
				[theme.breakpoints.down('xs')]: {
					width: '100% !important', // Overrides inline-style
					height: 100,
					marginBottom: '4px'
				},
				'&:hover, &$focusVisible': {
					zIndex: 1,
					'& $imageBackdrop': {
						opacity: 0.15
					},
					'& $imageMarked': {
						opacity: 0
					},
					'& $imageTitle': {
						border: '4px solid currentColor'
					}
				}
			},
			focusVisible: {},
			imageButton: {
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: theme.palette.common.white
			},
			imageSrc: {
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				backgroundSize: 'cover',
				backgroundPosition: 'center 40%'
			},
			imageBackdrop: {
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				backgroundColor: theme.palette.common.black,
				opacity: 0.4,
				transition: theme.transitions.create('opacity')
			},
			imageTitle: {
				position: 'relative',
				padding: `${theme.spacing(2)}px ${theme.spacing(
					4
				)}px ${theme.spacing(1) + 6}px`
			},
			imageMarked: {
				height: 3,
				width: 18,
				backgroundColor: theme.palette.common.white,
				position: 'absolute',
				bottom: -2,
				left: 'calc(50% - 9px)',
				transition: theme.transitions.create('opacity')
			}
		})
	);

	const classes = useStyles();

	const handleOnClickButton = useCallback((e: React.MouseEvent<HTMLElement>) => {}, []);

	return (
		<div className={classes.root}>
			{images.map(image => (
				<ButtonBase
					onClick={handleOnClickButton}
					focusRipple
					key={image.title}
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: image.width
					}}>
					<span
						className={classes.imageSrc}
						style={{
							backgroundImage: `url(${image.url})`
						}}
					/>
					<span className={classes.imageBackdrop} />
					<span className={classes.imageButton}>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							className={classes.imageTitle}>
							{image.title}
							<span className={classes.imageMarked} />
						</Typography>
					</span>
				</ButtonBase>
			))}
		</div>
	);
}