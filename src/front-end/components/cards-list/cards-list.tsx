type Card = {
	id: string;
};

type Props<T extends Card> = {
	CardComponent: React.ComponentType<T>;
	data: T[];
};

export const CardsList = <T extends Card>({
	CardComponent,
	data,
}: Props<T>) => {
	return (
		<div className="cards-list">
			{data.map((item) => (
				<CardComponent key={item.id} {...item} />
			))}
		</div>
	);
};
