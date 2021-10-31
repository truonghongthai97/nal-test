export interface IProps {
  page?: number;
  count: number;
  onChange?: (event: React.ChangeEvent<unknown>, currentPage: number) => void;
}
