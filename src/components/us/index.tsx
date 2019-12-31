import React, { useState, useMemo, CSSProperties} from 'react';
import content from '../../assets/content/content.json';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';


interface ImageProps {
	srcName: string;
}

function Image ({srcName = ''}:ImageProps) {
	const [srcImage , setSrcImage] = useState<any>({});
		import(`../../assets/images/${srcName}.jpg`).then((image:any) => {
    	setSrcImage(image.default);
  	});

  	return (<>
  		{srcImage && <img src={srcImage} alt={srcName} style={{width: '100%'}}/>}
  		</>);
}

interface ParagraphProps {
	paragraph: Paragraph;
}

interface Paragraph {
	texts: string [];
	images: string [];
}

function Paragraph ({paragraph}: ParagraphProps){
	const useStyles = makeStyles((theme: Theme) =>
		createStyles({
			root: {
				width : '48%',
				[theme.breakpoints.down('xs')]: {
					width: '100% !important',
					marginBottom: '4px'
				}	
			}
		})
	);

	const classes = useStyles();

	return (<>
			<div className={classes.root}>
			{paragraph.texts.map((element: any, index: number) => {
				return (<p key={index}>{element}</p>)
			})}
			</div>
			<div className={classes.root}>
			{paragraph.images.map((element: any, index: number)=>{
				return (<Image key={index} srcName={element} />)
			})}
			</div>
	</>)
}

export default function Us() {
	const customStyle: CSSProperties = {
		display: 'flex',
		flexWrap: 'wrap',
    	justifyContent: 'space-between'
	};
	const customStyleRow: CSSProperties = {
		display: 'flex',
    	flexDirection: 'column',
    	flexWrap: 'wrap',
    	alignContent: 'space-between'
	};

	return (
		<div style={customStyleRow}>
			{content.nosotros.map((paragraph: Paragraph, index: number)=>{
				return ( <div key={index} style={customStyle}>
					<Paragraph paragraph={paragraph}></Paragraph>
				</div>
				)
			})}
			
		</div>
	);
}
