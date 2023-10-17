import { Skeleton, Typography } from "@mui/material";
import { ResultProps } from "./result.interface";
import {
  CircleBox,
  ContentBox,
  ResultBox,
  ResultTypography,
  WarningBox,
} from "./styles";

const LotteryResult: React.FC<ResultProps> = ({ isLoading, result }) => {
  const getResult = () => {
    const resultNumbers = result?.dezenasOrdemSorteio;

    return resultNumbers?.map((number: string) => {
      return !isLoading ? (
        <CircleBox>
          <ResultTypography variant="h6" fontWeight="bold">
            {number}
          </ResultTypography>
        </CircleBox>
      ) : (
        <Skeleton height={100} width={100} variant="circular" />
      );
    });
  };

  return (
    <ContentBox>
      <ResultBox>{getResult()}</ResultBox>
      <WarningBox>
        <Typography variant="body2">
          Este sorteio é meramente ilustrativo.
        </Typography>
      </WarningBox>
    </ContentBox>
  );
};

export default LotteryResult;
