class Error(BaseException):
    pass


class UnexpectedTravisEnvironmentError(Error):
    pass


class UnexpectedValidationStateError(Error):
    pass


class UnsuccessfulInputConversionError(Error):
    pass
