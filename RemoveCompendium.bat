for %%I in (*.compendium) do set compendium=%%I
for %%I in (*.hkx) do FileConvert.exe --compendium %compendium% %%I %%I