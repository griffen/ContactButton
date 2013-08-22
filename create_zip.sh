echo "##################"
echo "# Delete old H5P #"
echo "##################"
cd ~/dev/social_button/
rm social_button.h5p
cp -R classysocial classysocial_backup
mv classysocial_backup classysocial/.
rm -R classysocial/demo classysocial/readme classysocial/README.md classysocial/package.json
chown -R griffen:griffen classysocial
zip -x *.sh .git TODO classysocial/classysocial_backup\* -r social_button.h5p *
mv classysocial/classysocial_backup .
rm -R classysocial
mv classysocial_backup classysocial 
echo "################################"
echo "# New Social Button is ready! #"
echo "################################"
