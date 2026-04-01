import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Typography,
} from "@mui/joy";

type BookProps = {
  title?: string;
  url?: string;
  image?: string;
  subtitle?: string;
  body?: string;
  date?: string;
};

export function Book(book: BookProps) {
  return (
    <>
      <Card key={book.title}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img
              src={`${process.env.PUBLIC_URL}${book.image}`}
              title={book.title}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>

        <CardContent>
          <Typography gutterBottom level="h3">
            {book.title}
          </Typography>
          <Typography level="body-sm">{book.body}</Typography>
        </CardContent>
      </Card>
    </>
  );
}
