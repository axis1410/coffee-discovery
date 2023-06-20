import cls from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './card.module.css';

const Card = (props) => {
	return (
		<div>
			<Link className={styles.cardLink} href={props.href}>
				<div className={cls('glass', styles.container)}>
					<div className={styles.cardHeaderWrapper}>
						<h2 className={styles.cardHeader}>{props.name}</h2>
					</div>
					<div className={styles.cardImageWrapper}>
						<Image
							className={styles.cardImage}
							src={props.imgUrl}
							width={260}
							height={160}
							alt=''
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
