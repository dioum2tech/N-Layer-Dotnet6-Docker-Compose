/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

/* Data Initialisation - TEST  */
-- Initialiser les données de a ville par défaut
SET IDENTITY_INSERT [dbo].[Ville] ON 
GO
INSERT [dbo].[Ville] ([Id], [Nom], [Created_at], [Updated_at]) 
VALUES (1, N'Bambey', CAST(N'2022-09-03T19:31:48.0000000' AS DateTime2), CAST(N'2022-09-03T19:31:48.0000000' AS DateTime2))
GO
SET IDENTITY_INSERT [dbo].[Ville] OFF
GO
