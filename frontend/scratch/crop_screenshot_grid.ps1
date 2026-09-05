Add-Type -AssemblyName System.Drawing

$src = 'C:\Users\anand\.gemini\antigravity\brain\d0f66f0e-061a-47e8-8796-e94ea43579f1\.user_uploaded\media_1787483666084.png'
$outDir = 'C:\way-to-bollywood\public\images\actors'

if (Test-Path $src) {
    $img = [System.Drawing.Image]::FromFile($src)
    $w = $img.Width
    $h = $img.Height
    Write-Host "Source Image Dimensions: $w x $h"

    function CropAndSave($x, $y, $width, $height, $filename) {
        $rect = new-object System.Drawing.Rectangle $x, $y, $width, $height
        $bmp = new-object System.Drawing.Bitmap $width, $height
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($img, (new-object System.Drawing.Rectangle 0, 0, $width, $height), $rect, [System.Drawing.GraphicsUnit]::Pixel)
        $g.Dispose()
        $destPath = Join-Path $outDir $filename
        $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        Write-Host "Saved $filename"
    }

    # 1. Col 1 Top (Black dress close up)
    CropAndSave 0 0 ([int]($w * 0.30)) ([int]($h * 0.28)) "editorial_grid_1.png"
    
    # 2. Col 1 Bottom (Green background model)
    CropAndSave 0 ([int]($h * 0.30)) ([int]($w * 0.30)) ([int]($h * 0.70)) "editorial_grid_2.png"

    # 3. Col 2 Top (Denim & blue shirt model)
    CropAndSave ([int]($w * 0.31)) 0 ([int]($w * 0.30)) ([int]($h * 0.40)) "editorial_grid_3.png"

    # 4. Col 2 Bottom (The Suit Edit model)
    CropAndSave ([int]($w * 0.31)) ([int]($h * 0.41)) ([int]($w * 0.30)) ([int]($h * 0.58)) "editorial_grid_4.png"

    # 5. Col 3 Top (Patterned knit top model)
    CropAndSave ([int]($w * 0.63)) 0 ([int]($w * 0.36)) ([int]($h * 0.30)) "editorial_grid_5.png"

    # 6. Col 3 Bottom (Denim jacket + sunglasses model)
    CropAndSave ([int]($w * 0.63)) ([int]($h * 0.31)) ([int]($w * 0.36)) ([int]($h * 0.68)) "editorial_grid_6.png"

    $img.Dispose()
    Write-Host "All 6 photos successfully extracted!"
} else {
    Write-Host "Source image not found"
}
