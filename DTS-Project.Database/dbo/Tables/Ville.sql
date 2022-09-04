CREATE TABLE [dbo].[Ville]
(
	[Id] bigint CHECK ([Id] > 0) NOT NULL IDENTITY,
  [Nom] varchar(50) NOT NULL,
  [Created_at] datetime2(0) NULL DEFAULT NULL,
  [Updated_at] datetime2(0) NULL DEFAULT NULL,
  PRIMARY KEY ([Id])
)
