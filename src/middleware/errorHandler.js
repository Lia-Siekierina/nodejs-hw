import createHttpError from 'http-errors';

const { HttpError } = createHttpError;

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      message: err.message,
    });
    return;
  }

  res.status(500).json({
    message: 'Something went wrong',
  });
};
